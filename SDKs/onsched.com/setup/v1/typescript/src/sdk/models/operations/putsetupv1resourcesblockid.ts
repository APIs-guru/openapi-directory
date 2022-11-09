import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1ResourcesBlockIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ResourcesBlockIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  resourceBlockUpdateModel?: shared.ResourceBlockUpdateModel;

  @Metadata({ data: "request, media_type=application/json" })
  resourceBlockUpdateModel1?: shared.ResourceBlockUpdateModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  resourceBlockUpdateModel2?: shared.ResourceBlockUpdateModel;

  @Metadata({ data: "request, media_type=text/json" })
  resourceBlockUpdateModel3?: shared.ResourceBlockUpdateModel;
}


export class PutSetupV1ResourcesBlockIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSetupV1ResourcesBlockIdPathParams;

  @Metadata()
  request?: PutSetupV1ResourcesBlockIdRequests;
}


export class PutSetupV1ResourcesBlockIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceBlockViewModel?: shared.ResourceBlockViewModel;

  @Metadata()
  statusCode: number;
}
