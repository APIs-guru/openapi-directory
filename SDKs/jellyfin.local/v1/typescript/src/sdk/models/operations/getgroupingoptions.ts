import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGroupingOptionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetGroupingOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGroupingOptionsPathParams;
}


export class GetGroupingOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata({ elemType: shared.SpecialViewOptionDto })
  specialViewOptionDtos?: shared.SpecialViewOptionDto[];

  @SpeakeasyMetadata()
  statusCode: number;
}
