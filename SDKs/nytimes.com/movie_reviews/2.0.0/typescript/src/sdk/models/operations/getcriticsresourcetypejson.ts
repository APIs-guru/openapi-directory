import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCriticsResourceTypeJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=resource-type" })
  resourceType: string;
}


export class GetCriticsResourceTypeJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCriticsResourceTypeJsonPathParams;
}


export class GetCriticsResourceTypeJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=num_results" })
  numResults?: number;

  @Metadata({ data: "json, name=results", elemType: shared.Critic })
  results?: shared.Critic[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetCriticsResourceTypeJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCriticsResourceTypeJson200ApplicationJsonObject?: GetCriticsResourceTypeJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
