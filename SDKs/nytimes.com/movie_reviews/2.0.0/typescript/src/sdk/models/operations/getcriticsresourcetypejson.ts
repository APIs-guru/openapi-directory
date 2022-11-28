import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCriticsResourceTypeJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource-type" })
  resourceType: string;
}


export class GetCriticsResourceTypeJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=num_results" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Critic })
  results?: shared.Critic[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetCriticsResourceTypeJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCriticsResourceTypeJsonPathParams;
}


export class GetCriticsResourceTypeJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCriticsResourceTypeJson200ApplicationJsonObject?: GetCriticsResourceTypeJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
