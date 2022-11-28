import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorSecretIdNotFound
/** 
 * This secret ID was not recognised
**/
export class ErrorSecretIdNotFound extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
