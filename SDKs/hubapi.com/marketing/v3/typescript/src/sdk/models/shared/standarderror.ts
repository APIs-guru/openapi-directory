import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorCategory } from "./errorcategory";
import { ErrorDetail } from "./errordetail";



export class StandardError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: ErrorCategory;

  @SpeakeasyMetadata({ data: "json, name=context" })
  context: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ErrorDetail })
  errors: ErrorDetail[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=subCategory" })
  subCategory?: Map<string, any>;
}
