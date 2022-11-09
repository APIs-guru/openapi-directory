import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthenticationExecutionExportRepresentation } from "./authenticationexecutionexportrepresentation";


export class AuthenticationFlowRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias" })
  alias?: string;

  @Metadata({ data: "json, name=authenticationExecutions", elemType: shared.AuthenticationExecutionExportRepresentation })
  authenticationExecutions?: AuthenticationExecutionExportRepresentation[];

  @Metadata({ data: "json, name=builtIn" })
  builtIn?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=providerId" })
  providerId?: string;

  @Metadata({ data: "json, name=topLevel" })
  topLevel?: boolean;
}
