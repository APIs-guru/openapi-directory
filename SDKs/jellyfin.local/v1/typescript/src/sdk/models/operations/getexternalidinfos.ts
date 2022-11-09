import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetExternalIdInfosPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetExternalIdInfosSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetExternalIdInfosRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetExternalIdInfosPathParams;

  @Metadata()
  security: GetExternalIdInfosSecurity;
}


export class GetExternalIdInfosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ExternalIdInfo })
  externalIdInfos?: shared.ExternalIdInfo[];

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
