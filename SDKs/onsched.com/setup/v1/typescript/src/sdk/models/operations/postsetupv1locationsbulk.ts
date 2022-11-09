import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1LocationsBulkRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  locationsInputModel?: Map<string, any>;

  @Metadata({ data: "request, media_type=application/json" })
  locationsInputModel1?: Map<string, any>;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  locationsInputModel2?: Map<string, any>;

  @Metadata({ data: "request, media_type=text/json" })
  locationsInputModel3?: Map<string, any>;
}


export class PostSetupV1LocationsBulkRequest extends SpeakeasyBase {
  @Metadata()
  request?: PostSetupV1LocationsBulkRequests;
}


export class PostSetupV1LocationsBulkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.LocationViewModel })
  locationViewModels?: shared.LocationViewModel[];

  @Metadata()
  statusCode: number;
}
