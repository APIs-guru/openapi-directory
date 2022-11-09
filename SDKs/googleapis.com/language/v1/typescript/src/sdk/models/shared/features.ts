import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClassificationModelOptions } from "./classificationmodeloptions";


// Features
/** 
 * All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input.
**/
export class Features extends SpeakeasyBase {
  @Metadata({ data: "json, name=classificationModelOptions" })
  classificationModelOptions?: ClassificationModelOptions;

  @Metadata({ data: "json, name=classifyText" })
  classifyText?: boolean;

  @Metadata({ data: "json, name=extractDocumentSentiment" })
  extractDocumentSentiment?: boolean;

  @Metadata({ data: "json, name=extractEntities" })
  extractEntities?: boolean;

  @Metadata({ data: "json, name=extractEntitySentiment" })
  extractEntitySentiment?: boolean;

  @Metadata({ data: "json, name=extractSyntax" })
  extractSyntax?: boolean;
}
