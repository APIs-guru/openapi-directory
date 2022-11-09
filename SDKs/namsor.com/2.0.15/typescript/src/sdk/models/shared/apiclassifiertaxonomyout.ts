import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiClassifierTaxonomyOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=classifierName" })
  classifierName?: string;

  @Metadata({ data: "json, name=taxonomyClasses" })
  taxonomyClasses?: string[];
}
