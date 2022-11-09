import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSimpleQueryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=pretty" })
  pretty?: boolean;
}


export class PostSimpleQueryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostSimpleQueryQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class PostSimpleQueryResponse extends SpeakeasyBase {
  @Metadata()
  fourHundred?: shared.FourHundred;

  @Metadata()
  fourHundredAndFour?: shared.FourHundredAndFour;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
