import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CheckRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=api_key;" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "form, name=api_secret;" })
  apiSecret: string;

  @SpeakeasyMetadata({ data: "form, name=code;" })
  code: string;

  @SpeakeasyMetadata({ data: "form, name=ip_address;" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "form, name=request_id;" })
  requestId: string;
}
