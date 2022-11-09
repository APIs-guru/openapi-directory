import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1ResourcegroupsIdRecoverPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ResourcegroupsIdRecoverRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSetupV1ResourcegroupsIdRecoverPathParams;
}


export class PutSetupV1ResourcegroupsIdRecoverResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceViewModel?: shared.ResourceViewModel;

  @Metadata()
  statusCode: number;
}
