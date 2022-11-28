import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkPiiRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum CreateNetworkPiiRequestRequestBodyTypeEnum {
    Delete = "delete",
    RestrictProcessing = "restrict processing"
}


export class CreateNetworkPiiRequestRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasets" })
  datasets?: string[];

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=mac" })
  mac?: string;

  @SpeakeasyMetadata({ data: "json, name=smDeviceId" })
  smDeviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=smUserId" })
  smUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CreateNetworkPiiRequestRequestBodyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


export class CreateNetworkPiiRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkPiiRequestPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateNetworkPiiRequestRequestBody;
}


export class CreateNetworkPiiRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkPiiRequest201ApplicationJsonObject?: Map<string, any>;
}
