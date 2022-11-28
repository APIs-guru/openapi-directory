import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Features
/** 
 * All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input.
**/
export class Features extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extractDocumentSentiment" })
  extractDocumentSentiment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=extractEntities" })
  extractEntities?: boolean;

  @SpeakeasyMetadata({ data: "json, name=extractSyntax" })
  extractSyntax?: boolean;
}
