import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQueriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getQueries200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
