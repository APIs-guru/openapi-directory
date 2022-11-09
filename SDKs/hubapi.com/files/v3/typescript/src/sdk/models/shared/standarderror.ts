import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErrorCategory } from "./errorcategory";
import { ErrorDetail } from "./errordetail";


export class StandardError extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: ErrorCategory;

  @Metadata({ data: "json, name=context" })
  context: Map<string, string[]>;

  @Metadata({ data: "json, name=errors", elemType: shared.ErrorDetail })
  errors: ErrorDetail[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=links" })
  links: Map<string, string>;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=subCategory" })
  subCategory?: Map<string, any>;
}
