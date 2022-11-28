import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Jwk is a JSON Web Key as specified in RFC 7517
**/
export declare class Jwk extends SpeakeasyBase {
    alg?: string;
    crv?: string;
    e?: string;
    kid?: string;
    kty?: string;
    n?: string;
    use?: string;
    x?: string;
    y?: string;
}
