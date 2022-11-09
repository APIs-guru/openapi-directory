import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Dataset } from "./dataset";


// ListDatasetsResponse
/** 
 * Lists the available datasets.
**/
export class ListDatasetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasets", elemType: shared.Dataset })
  datasets?: Dataset[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
