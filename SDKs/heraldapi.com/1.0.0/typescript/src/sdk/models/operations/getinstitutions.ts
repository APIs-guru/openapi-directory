import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInstitutions200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=institutions", elemType: shared.InstitutionV1 })
  institutions?: shared.InstitutionV1[];
}


export class GetInstitutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getInstitutions200ApplicationJsonObject?: GetInstitutions200ApplicationJson;
}
