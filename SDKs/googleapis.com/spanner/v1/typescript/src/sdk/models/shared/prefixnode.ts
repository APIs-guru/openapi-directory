import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PrefixNode
/** 
 * A message representing a key prefix node in the key prefix hierarchy. for eg. Bigtable keyspaces are lexicographically ordered mappings of keys to values. Keys often have a shared prefix structure where users use the keys to organize data. Eg ///employee In this case Keysight will possibly use one node for a company and reuse it for all employees that fall under the company. Doing so improves legibility in the UI.
**/
export class PrefixNode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceNode" })
  dataSourceNode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=depth" })
  depth?: number;

  @SpeakeasyMetadata({ data: "json, name=endIndex" })
  endIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=word" })
  word?: string;
}
