import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SourceRepositoryInput
/** 
 * Describes SourceRepository, used to represent parameters related to source repository where a function is hosted.
**/
export class SourceRepositoryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// SourceRepository
/** 
 * Describes SourceRepository, used to represent parameters related to source repository where a function is hosted.
**/
export class SourceRepository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deployedUrl" })
  deployedUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
