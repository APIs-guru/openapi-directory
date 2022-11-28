import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRemoteImageProvidersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetRemoteImageProvidersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetRemoteImageProvidersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRemoteImageProvidersPathParams;

  @SpeakeasyMetadata()
  security: GetRemoteImageProvidersSecurity;
}


export class GetRemoteImageProvidersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ImageProviderInfo })
  imageProviderInfos?: shared.ImageProviderInfo[];

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
