import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationExecutionExportRepresentation } from "./authenticationexecutionexportrepresentation";



export class AuthenticationFlowRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=authenticationExecutions", elemType: AuthenticationExecutionExportRepresentation })
  authenticationExecutions?: AuthenticationExecutionExportRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=builtIn" })
  builtIn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=providerId" })
  providerId?: string;

  @SpeakeasyMetadata({ data: "json, name=topLevel" })
  topLevel?: boolean;
}
