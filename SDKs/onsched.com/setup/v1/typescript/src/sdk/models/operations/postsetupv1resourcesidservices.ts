import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1ResourcesIdServicesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1ResourcesIdServicesRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  strings?: string[];

  @Metadata({ data: "request, media_type=application/json" })
  strings1?: string[];

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  strings2?: string[];

  @Metadata({ data: "request, media_type=text/json" })
  strings3?: string[];
}


export class PostSetupV1ResourcesIdServicesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSetupV1ResourcesIdServicesPathParams;

  @Metadata()
  request?: PostSetupV1ResourcesIdServicesRequests;
}


export class PostSetupV1ResourcesIdServicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceViewModel?: shared.ResourceViewModel;

  @Metadata()
  statusCode: number;
}
