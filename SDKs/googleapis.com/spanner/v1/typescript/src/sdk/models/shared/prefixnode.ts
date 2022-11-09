import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PrefixNode
/** 
 * A message representing a key prefix node in the key prefix hierarchy. for eg. Bigtable keyspaces are lexicographically ordered mappings of keys to values. Keys often have a shared prefix structure where users use the keys to organize data. Eg ///employee In this case Keysight will possibly use one node for a company and reuse it for all employees that fall under the company. Doing so improves legibility in the UI.
**/
export class PrefixNode extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSourceNode" })
  dataSourceNode?: boolean;

  @Metadata({ data: "json, name=depth" })
  depth?: number;

  @Metadata({ data: "json, name=endIndex" })
  endIndex?: number;

  @Metadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "json, name=word" })
  word?: string;
}
