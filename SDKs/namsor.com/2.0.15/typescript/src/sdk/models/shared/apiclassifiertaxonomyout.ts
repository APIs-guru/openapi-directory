import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiClassifierTaxonomyOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classifierName" })
  classifierName?: string;

  @SpeakeasyMetadata({ data: "json, name=taxonomyClasses" })
  taxonomyClasses?: string[];
}
