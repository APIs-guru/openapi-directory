import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedCable } from "./nestedcable";
import { NestedDevice } from "./nesteddevice";


export enum PowerPortConnectionStatusLabelEnum {
    NotConnected = "Not Connected",
    Connected = "Connected"
}


export class PowerPortConnectionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: PowerPortConnectionStatusLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: boolean;
}

export enum PowerPortTypeLabelEnum {
    C6 = "C6",
    C8 = "C8",
    C14 = "C14",
    C16 = "C16",
    C20 = "C20",
    PPlusNPlusE4H = "P+N+E 4H",
    PPlusNPlusE6H = "P+N+E 6H",
    PPlusNPlusE9H = "P+N+E 9H",
    TwoPPlusE4H = "2P+E 4H",
    TwoPPlusE6H = "2P+E 6H",
    TwoPPlusE9H = "2P+E 9H",
    ThreePPlusE4H = "3P+E 4H",
    ThreePPlusE6H = "3P+E 6H",
    ThreePPlusE9H = "3P+E 9H",
    ThreePPlusNPlusE4H = "3P+N+E 4H",
    ThreePPlusNPlusE6H = "3P+N+E 6H",
    ThreePPlusNPlusE9H = "3P+N+E 9H",
    Nema115P = "NEMA 1-15P",
    Nema515P = "NEMA 5-15P",
    Nema520P = "NEMA 5-20P",
    Nema530P = "NEMA 5-30P",
    Nema550P = "NEMA 5-50P",
    Nema615P = "NEMA 6-15P",
    Nema620P = "NEMA 6-20P",
    Nema630P = "NEMA 6-30P",
    Nema650P = "NEMA 6-50P",
    Nema1030P = "NEMA 10-30P",
    Nema1050P = "NEMA 10-50P",
    Nema1420P = "NEMA 14-20P",
    Nema1430P = "NEMA 14-30P",
    Nema1450P = "NEMA 14-50P",
    Nema1460P = "NEMA 14-60P",
    NemaL115P = "NEMA L1-15P",
    NemaL515P = "NEMA L5-15P",
    NemaL520P = "NEMA L5-20P",
    NemaL530P = "NEMA L5-30P",
    NemaL550P = "NEMA L5-50P",
    NemaL615P = "NEMA L6-15P",
    NemaL620P = "NEMA L6-20P",
    NemaL630P = "NEMA L6-30P",
    NemaL650P = "NEMA L6-50P",
    NemaL1030P = "NEMA L10-30P",
    NemaL1420P = "NEMA L14-20P",
    NemaL1430P = "NEMA L14-30P",
    NemaL1450P = "NEMA L14-50P",
    NemaL1460P = "NEMA L14-60P",
    NemaL2120P = "NEMA L21-20P",
    NemaL2130P = "NEMA L21-30P",
    Cs6361C = "CS6361C",
    Cs6365C = "CS6365C",
    Cs8165C = "CS8165C",
    Cs8265C = "CS8265C",
    Cs8365C = "CS8365C",
    Cs8465C = "CS8465C",
    ItaTypeECee75 = "ITA Type E (CEE 7/5)",
    ItaTypeFCee74 = "ITA Type F (CEE 7/4)",
    ItaTypeEFCee77 = "ITA Type E/F (CEE 7/7)",
    ItaTypeGBs1363 = "ITA Type G (BS 1363)",
    ItaTypeH = "ITA Type H",
    ItaTypeI = "ITA Type I",
    ItaTypeJ = "ITA Type J",
    ItaTypeK = "ITA Type K",
    ItaTypeLCei2350 = "ITA Type L (CEI 23-50)",
    ItaTypeMBs546 = "ITA Type M (BS 546)",
    ItaTypeN = "ITA Type N",
    ItaTypeO = "ITA Type O"
}

export enum PowerPortTypeValueEnum {
    Iec60320C6 = "iec-60320-c6",
    Iec60320C8 = "iec-60320-c8",
    Iec60320C14 = "iec-60320-c14",
    Iec60320C16 = "iec-60320-c16",
    Iec60320C20 = "iec-60320-c20",
    Iec60309PNE4h = "iec-60309-p-n-e-4h",
    Iec60309PNE6h = "iec-60309-p-n-e-6h",
    Iec60309PNE9h = "iec-60309-p-n-e-9h",
    Iec603092pE4h = "iec-60309-2p-e-4h",
    Iec603092pE6h = "iec-60309-2p-e-6h",
    Iec603092pE9h = "iec-60309-2p-e-9h",
    Iec603093pE4h = "iec-60309-3p-e-4h",
    Iec603093pE6h = "iec-60309-3p-e-6h",
    Iec603093pE9h = "iec-60309-3p-e-9h",
    Iec603093pNE4h = "iec-60309-3p-n-e-4h",
    Iec603093pNE6h = "iec-60309-3p-n-e-6h",
    Iec603093pNE9h = "iec-60309-3p-n-e-9h",
    Nema115p = "nema-1-15p",
    Nema515p = "nema-5-15p",
    Nema520p = "nema-5-20p",
    Nema530p = "nema-5-30p",
    Nema550p = "nema-5-50p",
    Nema615p = "nema-6-15p",
    Nema620p = "nema-6-20p",
    Nema630p = "nema-6-30p",
    Nema650p = "nema-6-50p",
    Nema1030p = "nema-10-30p",
    Nema1050p = "nema-10-50p",
    Nema1420p = "nema-14-20p",
    Nema1430p = "nema-14-30p",
    Nema1450p = "nema-14-50p",
    Nema1460p = "nema-14-60p",
    NemaL115p = "nema-l1-15p",
    NemaL515p = "nema-l5-15p",
    NemaL520p = "nema-l5-20p",
    NemaL530p = "nema-l5-30p",
    NemaL550p = "nema-l5-50p",
    NemaL615p = "nema-l6-15p",
    NemaL620p = "nema-l6-20p",
    NemaL630p = "nema-l6-30p",
    NemaL650p = "nema-l6-50p",
    NemaL1030p = "nema-l10-30p",
    NemaL1420p = "nema-l14-20p",
    NemaL1430p = "nema-l14-30p",
    NemaL1450p = "nema-l14-50p",
    NemaL1460p = "nema-l14-60p",
    NemaL2120p = "nema-l21-20p",
    NemaL2130p = "nema-l21-30p",
    Cs6361c = "cs6361c",
    Cs6365c = "cs6365c",
    Cs8165c = "cs8165c",
    Cs8265c = "cs8265c",
    Cs8365c = "cs8365c",
    Cs8465c = "cs8465c",
    ItaE = "ita-e",
    ItaF = "ita-f",
    ItaEf = "ita-ef",
    ItaG = "ita-g",
    ItaH = "ita-h",
    ItaI = "ita-i",
    ItaJ = "ita-j",
    ItaK = "ita-k",
    ItaL = "ita-l",
    ItaM = "ita-m",
    ItaN = "ita-n",
    ItaO = "ita-o"
}


export class PowerPortType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: PowerPortTypeLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: PowerPortTypeValueEnum;
}


export class PowerPort extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocated_draw" })
  allocatedDraw?: number;

  @SpeakeasyMetadata({ data: "json, name=cable" })
  cable?: NestedCable;

  @SpeakeasyMetadata({ data: "json, name=connected_endpoint" })
  connectedEndpoint?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=connected_endpoint_type" })
  connectedEndpointType?: string;

  @SpeakeasyMetadata({ data: "json, name=connection_status" })
  connectionStatus?: PowerPortConnectionStatus;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device: NestedDevice;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=maximum_draw" })
  maximumDraw?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PowerPortType;
}
