import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Features
/** 
 * All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input.
**/
export class Features extends SpeakeasyBase {
  @Metadata({ data: "json, name=extractDocumentSentiment" })
  extractDocumentSentiment?: boolean;

  @Metadata({ data: "json, name=extractEntities" })
  extractEntities?: boolean;

  @Metadata({ data: "json, name=extractSyntax" })
  extractSyntax?: boolean;
}
