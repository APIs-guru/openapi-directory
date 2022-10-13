import warnings
import requests
from sdk.models import operations
from . import utils


SERVERS = [
	"https://api.math.tools",
	"http://api.math.tools",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def get_numbers_base(self, request: operations.GetNumbersBaseRequest) -> operations.GetNumbersBaseResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/base"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersBaseResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_base_binary(self, request: operations.GetNumbersBaseBinaryRequest) -> operations.GetNumbersBaseBinaryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/base/binary"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersBaseBinaryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_base_hex(self, request: operations.GetNumbersBaseHexRequest) -> operations.GetNumbersBaseHexResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/base/hex"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersBaseHexResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_base_octal(self, request: operations.GetNumbersBaseOctalRequest) -> operations.GetNumbersBaseOctalResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/base/octal"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersBaseOctalResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_cardinal(self, request: operations.GetNumbersCardinalRequest) -> operations.GetNumbersCardinalResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/cardinal"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersCardinalResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_currency(self, request: operations.GetNumbersCurrencyRequest) -> operations.GetNumbersCurrencyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/currency"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersCurrencyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_fact(self, request: operations.GetNumbersFactRequest) -> operations.GetNumbersFactResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/fact"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersFactResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_is_cube(self, request: operations.GetNumbersIsCubeRequest) -> operations.GetNumbersIsCubeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/is-cube"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersIsCubeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_is_palindrome(self, request: operations.GetNumbersIsPalindromeRequest) -> operations.GetNumbersIsPalindromeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/is-palindrome"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersIsPalindromeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_is_square(self, request: operations.GetNumbersIsSquareRequest) -> operations.GetNumbersIsSquareResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/is-square"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersIsSquareResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_is_triangle(self, request: operations.GetNumbersIsTriangleRequest) -> operations.GetNumbersIsTriangleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/is-triangle"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersIsTriangleResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_nod(self, request: operations.GetNumbersNodRequest) -> operations.GetNumbersNodResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/nod"
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersNodResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_numeral_chinese(self, request: operations.GetNumbersNumeralChineseRequest) -> operations.GetNumbersNumeralChineseResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/numeral/chinese"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersNumeralChineseResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_numeral_egyptian(self, request: operations.GetNumbersNumeralEgyptianRequest) -> operations.GetNumbersNumeralEgyptianResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/numeral/egyptian"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersNumeralEgyptianResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_numeral_roman(self, request: operations.GetNumbersNumeralRomanRequest) -> operations.GetNumbersNumeralRomanResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/numeral/roman"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersNumeralRomanResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_ordinal(self, request: operations.GetNumbersOrdinalRequest) -> operations.GetNumbersOrdinalResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/ordinal"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersOrdinalResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_pi(self, request: operations.GetNumbersPiRequest) -> operations.GetNumbersPiResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/pi"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersPiResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_prime_factors(self, request: operations.GetNumbersPrimeFactorsRequest) -> operations.GetNumbersPrimeFactorsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/prime/factors"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersPrimeFactorsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_prime_is_fermat_prime(self, request: operations.GetNumbersPrimeIsFermatPrimeRequest) -> operations.GetNumbersPrimeIsFermatPrimeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/prime/is-fermat-prime"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersPrimeIsFermatPrimeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_prime_is_fibonacci_prime(self, request: operations.GetNumbersPrimeIsFibonacciPrimeRequest) -> operations.GetNumbersPrimeIsFibonacciPrimeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/prime/is-fibonacci-prime"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersPrimeIsFibonacciPrimeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_prime_is_mersenne_prime(self, request: operations.GetNumbersPrimeIsMersennePrimeRequest) -> operations.GetNumbersPrimeIsMersennePrimeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/prime/is-mersenne-prime"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersPrimeIsMersennePrimeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_prime_is_partition_prime(self, request: operations.GetNumbersPrimeIsPartitionPrimeRequest) -> operations.GetNumbersPrimeIsPartitionPrimeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/prime/is-partition-prime"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersPrimeIsPartitionPrimeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_prime_is_pell_prime(self, request: operations.GetNumbersPrimeIsPellPrimeRequest) -> operations.GetNumbersPrimeIsPellPrimeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/prime/is-pell-prime"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersPrimeIsPellPrimeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_prime_is_perfect(self, request: operations.GetNumbersPrimeIsPerfectRequest) -> operations.GetNumbersPrimeIsPerfectResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/prime/is-perfect"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersPrimeIsPerfectResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_prime_is_prime(self, request: operations.GetNumbersPrimeIsPrimeRequest) -> operations.GetNumbersPrimeIsPrimeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/prime/is-prime"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersPrimeIsPrimeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_numbers_random(self, request: operations.GetNumbersRandomRequest) -> operations.GetNumbersRandomResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/numbers/random"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersRandomResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    