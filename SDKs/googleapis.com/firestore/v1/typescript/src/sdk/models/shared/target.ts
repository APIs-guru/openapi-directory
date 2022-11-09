import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentsTarget } from "./documentstarget";
import { QueryTarget } from "./querytarget";


// Target
/** 
 * A specification of a set of documents to listen to.
**/
export class Target extends SpeakeasyBase {
  @Metadata({ data: "json, name=documents" })
  documents?: DocumentsTarget;

  @Metadata({ data: "json, name=once" })
  once?: boolean;

  @Metadata({ data: "json, name=query" })
  query?: QueryTarget;

  @Metadata({ data: "json, name=readTime" })
  readTime?: string;

  @Metadata({ data: "json, name=resumeToken" })
  resumeToken?: string;

  @Metadata({ data: "json, name=targetId" })
  targetId?: number;
}
