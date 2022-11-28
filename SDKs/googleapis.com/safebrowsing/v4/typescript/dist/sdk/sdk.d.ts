import { AxiosInstance } from "axios";
import { EncodedFullHashes } from "./encodedfullhashes";
import { EncodedUpdates } from "./encodedupdates";
import { FullHashes } from "./fullhashes";
import { ThreatHits } from "./threathits";
import { ThreatListUpdates } from "./threatlistupdates";
import { ThreatLists } from "./threatlists";
import { ThreatMatches } from "./threatmatches";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://safebrowsing.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    encodedFullHashes: EncodedFullHashes;
    encodedUpdates: EncodedUpdates;
    fullHashes: FullHashes;
    threatHits: ThreatHits;
    threatListUpdates: ThreatListUpdates;
    threatLists: ThreatLists;
    threatMatches: ThreatMatches;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
