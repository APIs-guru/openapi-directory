import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCoverageParameters200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coverage_parameters", elemType: shared.CoverageParameterV1 })
  coverageParameters?: shared.CoverageParameterV1[];
}


export class GetCoverageParametersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCoverageParameters200ApplicationJsonObject?: GetCoverageParameters200ApplicationJson;
}
