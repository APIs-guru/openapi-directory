import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1ResourcegroupsIdRecoverPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ResourcegroupsIdRecoverRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSetupV1ResourcegroupsIdRecoverPathParams;
}


export class PutSetupV1ResourcegroupsIdRecoverResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceViewModel?: shared.ResourceViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
