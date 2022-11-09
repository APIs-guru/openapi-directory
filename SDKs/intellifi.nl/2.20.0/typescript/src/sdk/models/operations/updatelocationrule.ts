import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateLocationRulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateLocationRuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateLocationRulePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.LocationRuleUpdate;
}


export class UpdateLocationRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @Metadata()
  statusCode: number;
}
