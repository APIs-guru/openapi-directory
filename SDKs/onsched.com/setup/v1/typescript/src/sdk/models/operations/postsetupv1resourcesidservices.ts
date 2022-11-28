import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1ResourcesIdServicesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1ResourcesIdServicesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  strings?: string[];

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  strings1?: string[];

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  strings2?: string[];

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  strings3?: string[];
}


export class PostSetupV1ResourcesIdServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSetupV1ResourcesIdServicesPathParams;

  @SpeakeasyMetadata()
  request?: PostSetupV1ResourcesIdServicesRequests;
}


export class PostSetupV1ResourcesIdServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceViewModel?: shared.ResourceViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
