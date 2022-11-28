import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetExternalIdInfosPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetExternalIdInfosSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetExternalIdInfosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetExternalIdInfosPathParams;

  @SpeakeasyMetadata()
  security: GetExternalIdInfosSecurity;
}


export class GetExternalIdInfosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ExternalIdInfo })
  externalIdInfos?: shared.ExternalIdInfo[];

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
