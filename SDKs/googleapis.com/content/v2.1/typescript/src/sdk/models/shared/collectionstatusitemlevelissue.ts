import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CollectionStatusItemLevelIssue
/** 
 * Issue associated with the collection.
**/
export class CollectionStatusItemLevelIssue extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicableCountries" })
  applicableCountries?: string[];

  @Metadata({ data: "json, name=attributeName" })
  attributeName?: string;

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=documentation" })
  documentation?: string;

  @Metadata({ data: "json, name=resolution" })
  resolution?: string;

  @Metadata({ data: "json, name=servability" })
  servability?: string;
}
