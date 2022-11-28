import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1ResourcesBlockIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ResourcesBlockIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  resourceBlockUpdateModel?: shared.ResourceBlockUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  resourceBlockUpdateModel1?: shared.ResourceBlockUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  resourceBlockUpdateModel2?: shared.ResourceBlockUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  resourceBlockUpdateModel3?: shared.ResourceBlockUpdateModel;
}


export class PutSetupV1ResourcesBlockIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSetupV1ResourcesBlockIdPathParams;

  @SpeakeasyMetadata()
  request?: PutSetupV1ResourcesBlockIdRequests;
}


export class PutSetupV1ResourcesBlockIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceBlockViewModel?: shared.ResourceBlockViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
