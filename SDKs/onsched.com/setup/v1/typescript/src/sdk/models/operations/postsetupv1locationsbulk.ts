import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1LocationsBulkRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  locationsInputModel?: Map<string, any>;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  locationsInputModel1?: Map<string, any>;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  locationsInputModel2?: Map<string, any>;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  locationsInputModel3?: Map<string, any>;
}


export class PostSetupV1LocationsBulkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostSetupV1LocationsBulkRequests;
}


export class PostSetupV1LocationsBulkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.LocationViewModel })
  locationViewModels?: shared.LocationViewModel[];

  @SpeakeasyMetadata()
  statusCode: number;
}
