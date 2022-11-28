import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";



// LinksSigningBasket
/** 
 * A list of hyperlinks to be recognised by the TPP. The actual hyperlinks used in the
 * response depend on the dynamical decisions of the ASPSP when processing the request.
 * 
 * Remark: All links can be relative or full links, to be decided by the ASPSP.
 * Type of links admitted in this response, (further links might be added for ASPSP defined
 * extensions):
 * 
 *   * 'scaRedirect':
 *     In case of an SCA Redirect Approach, the ASPSP is transmitting the link to
 *     which to redirect the PSU browser.
 *   * 'scaOAuth':
 *     In case of a SCA OAuth2 Approach, the ASPSP is transmitting the URI where the configuration of
 *     the Authorisation Server can be retrieved. The configuration follows the
 *     OAuth 2.0 Authorisation Server Metadata specification.
 *   * 'startAuthorisation':
 *     In case, where an explicit start of the transaction authorisation is needed,
 *     but no more data needs to be updated (no authentication method to be selected,
 *     no PSU identification nor PSU authentication data to be uploaded).
 *   * 'startAuthorisationWithPsuIdentification':
 *     The link to the authorisation end-point, where the authorisation sub-resource
 *     has to be generated while uploading the PSU identification data.
 *   * 'startAuthorisationWithPsuAuthentication':
 *     The link to the authorisation end-point, where the authorisation sub-resource
 *     has to be generated while uploading the PSU authentication data.
 *   * 'startAuthorisationWithEncryptedPsuAuthentication':
 *     The link to the authorisation end-point, where the authorisation sub-resource has
 *     to be generated while uploading the encrypted PSU authentication data.
 *   * 'startAuthorisationWithAuthenticationMethodSelection':
 *     The link to the authorisation end-point, where the authorisation sub-resource
 *     has to be generated while selecting the authentication method.
 *     This link is contained under exactly the same conditions as the data element 'scaMethods'
 *   * 'startAuthorisationWithTransactionAuthorisation':
 *     The link to the authorisation end-point, where the authorisation sub-resource
 *     has to be generated while authorising the transaction e.g. by uploading an
 *     OTP received by SMS.
 *   * 'self':
 *     The link to the payment initiation resource created by this request.
 *     This link can be used to retrieve the resource data.
 *   * 'status':
 *     The link to retrieve the transaction status of the payment initiation.
 *   * 'scaStatus':
 *     The link to retrieve the scaStatus of the corresponding authorisation sub-resource.
 *     This link is only contained, if an authorisation sub-resource has been already created.
 * 
**/
export class LinksSigningBasket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scaOAuth" })
  scaOAuth?: HrefType;

  @SpeakeasyMetadata({ data: "json, name=scaRedirect" })
  scaRedirect?: HrefType;

  @SpeakeasyMetadata({ data: "json, name=scaStatus" })
  scaStatus?: HrefType;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: HrefType;

  @SpeakeasyMetadata({ data: "json, name=startAuthorisation" })
  startAuthorisation?: HrefType;

  @SpeakeasyMetadata({ data: "json, name=startAuthorisationWithAuthenticationMethodSelection" })
  startAuthorisationWithAuthenticationMethodSelection?: HrefType;

  @SpeakeasyMetadata({ data: "json, name=startAuthorisationWithEncryptedPsuAuthentication" })
  startAuthorisationWithEncryptedPsuAuthentication?: HrefType;

  @SpeakeasyMetadata({ data: "json, name=startAuthorisationWithPsuAuthentication" })
  startAuthorisationWithPsuAuthentication?: HrefType;

  @SpeakeasyMetadata({ data: "json, name=startAuthorisationWithPsuIdentification" })
  startAuthorisationWithPsuIdentification?: HrefType;

  @SpeakeasyMetadata({ data: "json, name=startAuthorisationWithTransactionAuthorisation" })
  startAuthorisationWithTransactionAuthorisation?: HrefType;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: HrefType;
}
