import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SourceRepository
/** 
 * Describes SourceRepository, used to represent parameters related to source repository where a function is hosted.
**/
export class SourceRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=deployedUrl" })
  deployedUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
