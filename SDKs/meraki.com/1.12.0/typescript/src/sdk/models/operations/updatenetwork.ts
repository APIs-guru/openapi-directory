import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=enrollmentString" })
  enrollmentString?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;
}


export class UpdateNetworkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkRequestBody;
}


export class UpdateNetworkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetwork200ApplicationJsonObject?: Map<string, any>;
}
