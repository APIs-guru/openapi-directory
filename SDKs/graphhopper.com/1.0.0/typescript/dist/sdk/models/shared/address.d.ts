import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AddressCurbsideEnum {
    Right = "right",
    Left = "left",
    Any = "any"
}
export declare class Address extends SpeakeasyBase {
    curbside?: AddressCurbsideEnum;
    lat: number;
    locationId: string;
    lon: number;
    name?: string;
    streetHint?: string;
}
