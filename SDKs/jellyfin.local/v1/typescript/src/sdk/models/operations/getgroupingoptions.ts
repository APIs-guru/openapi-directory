import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGroupingOptionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetGroupingOptionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGroupingOptionsPathParams;
}


export class GetGroupingOptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata({ elemType: shared.SpecialViewOptionDto })
  specialViewOptionDtos?: shared.SpecialViewOptionDto[];

  @Metadata()
  statusCode: number;
}
