import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentsTarget } from "./documentstarget";
import { QueryTarget } from "./querytarget";



// Target
/** 
 * A specification of a set of documents to listen to.
**/
export class Target extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documents" })
  documents?: DocumentsTarget;

  @SpeakeasyMetadata({ data: "json, name=once" })
  once?: boolean;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: QueryTarget;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;

  @SpeakeasyMetadata({ data: "json, name=resumeToken" })
  resumeToken?: string;

  @SpeakeasyMetadata({ data: "json, name=targetId" })
  targetId?: number;
}
