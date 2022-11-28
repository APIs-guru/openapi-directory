import { SpeakeasyBase } from "../../../internal/utils";
export declare class OffersItemsItems extends SpeakeasyBase {
    author?: string;
    canonicalVolumeLink?: string;
    coverUrl?: string;
    description?: string;
    title?: string;
    volumeId?: string;
}
export declare class OffersItems extends SpeakeasyBase {
    artUrl?: string;
    gservicesKey?: string;
    id?: string;
    items?: OffersItemsItems[];
}
export declare class Offers extends SpeakeasyBase {
    items?: OffersItems[];
    kind?: string;
}
