import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSetupV1ResourcesBlocksIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1ResourcesBlocksIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSetupV1ResourcesBlocksIdPathParams;
}


export class GetSetupV1ResourcesBlocksIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceBlockViewModel?: shared.ResourceBlockViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
