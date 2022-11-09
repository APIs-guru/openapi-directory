import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1ServicesBlocksIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1ServicesBlocksIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1ServicesBlocksIdPathParams;
}


export class GetSetupV1ServicesBlocksIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceBlockViewModel?: shared.ResourceBlockViewModel;

  @Metadata()
  statusCode: number;
}
