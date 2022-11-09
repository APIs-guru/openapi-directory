import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkPiiRequestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum CreateNetworkPiiRequestRequestBodyTypeEnum {
    Delete = "delete"
,    RestrictProcessing = "restrict processing"
}


export class CreateNetworkPiiRequestRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasets" })
  datasets?: string[];

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=mac" })
  mac?: string;

  @Metadata({ data: "json, name=smDeviceId" })
  smDeviceId?: string;

  @Metadata({ data: "json, name=smUserId" })
  smUserId?: string;

  @Metadata({ data: "json, name=type" })
  type?: CreateNetworkPiiRequestRequestBodyTypeEnum;

  @Metadata({ data: "json, name=username" })
  username?: string;
}


export class CreateNetworkPiiRequestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkPiiRequestPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateNetworkPiiRequestRequestBody;
}


export class CreateNetworkPiiRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkPiiRequest201ApplicationJsonObject?: Map<string, any>;
}
