import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLocationRuleByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetLocationRuleByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLocationRuleByIdPathParams;
}


export class GetLocationRuleByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  locationRule?: shared.LocationRule;

  @Metadata()
  statusCode: number;
}
