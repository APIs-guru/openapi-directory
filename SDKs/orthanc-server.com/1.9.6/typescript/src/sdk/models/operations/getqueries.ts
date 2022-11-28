import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetQueriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getQueries200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
