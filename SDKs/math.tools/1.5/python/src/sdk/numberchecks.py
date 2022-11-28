import requests
from sdk.models import operations
from . import utils

class NumberChecks:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_numbers_is_cube(self, request: operations.GetNumbersIsCubeRequest) -> operations.GetNumbersIsCubeResponse:
        r"""Checks whether a given number is a cube number or not.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/numbers/is-cube"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersIsCubeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_numbers_is_palindrome(self, request: operations.GetNumbersIsPalindromeRequest) -> operations.GetNumbersIsPalindromeResponse:
        r"""Checks whether a given number is a palindrome number or not.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/numbers/is-palindrome"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersIsPalindromeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_numbers_is_square(self, request: operations.GetNumbersIsSquareRequest) -> operations.GetNumbersIsSquareResponse:
        r"""Checks whether a given number is a square number or not.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/numbers/is-square"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersIsSquareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_numbers_is_triangle(self, request: operations.GetNumbersIsTriangleRequest) -> operations.GetNumbersIsTriangleResponse:
        r"""Checks whether a given number is a triangle number or not.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/numbers/is-triangle"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersIsTriangleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_numbers_prime_is_fermat_prime(self, request: operations.GetNumbersPrimeIsFermatPrimeRequest) -> operations.GetNumbersPrimeIsFermatPrimeResponse:
        r"""Checks whether a given number is a known fermat prime number or not.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/numbers/prime/is-fermat-prime"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersPrimeIsFermatPrimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_numbers_prime_is_fibonacci_prime(self, request: operations.GetNumbersPrimeIsFibonacciPrimeRequest) -> operations.GetNumbersPrimeIsFibonacciPrimeResponse:
        r"""Checks whether a given number is a known fibonacci prime number or not.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/numbers/prime/is-fibonacci-prime"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersPrimeIsFibonacciPrimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_numbers_prime_is_mersenne_prime(self, request: operations.GetNumbersPrimeIsMersennePrimeRequest) -> operations.GetNumbersPrimeIsMersennePrimeResponse:
        r"""Checks whether a given number is a known mersenne prime number or not.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/numbers/prime/is-mersenne-prime"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersPrimeIsMersennePrimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_numbers_prime_is_partition_prime(self, request: operations.GetNumbersPrimeIsPartitionPrimeRequest) -> operations.GetNumbersPrimeIsPartitionPrimeResponse:
        r"""Checks whether a given number is a known partition prime number or not.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/numbers/prime/is-partition-prime"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersPrimeIsPartitionPrimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_numbers_prime_is_pell_prime(self, request: operations.GetNumbersPrimeIsPellPrimeRequest) -> operations.GetNumbersPrimeIsPellPrimeResponse:
        r"""Checks whether a given number is a known pell prime number or not.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/numbers/prime/is-pell-prime"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersPrimeIsPellPrimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_numbers_prime_is_perfect(self, request: operations.GetNumbersPrimeIsPerfectRequest) -> operations.GetNumbersPrimeIsPerfectResponse:
        r"""Checks whether a given number is a perfect number or not.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/numbers/prime/is-perfect"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersPrimeIsPerfectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_numbers_prime_is_prime(self, request: operations.GetNumbersPrimeIsPrimeRequest) -> operations.GetNumbersPrimeIsPrimeResponse:
        r"""Checks whether a given number is a known prime number or not.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/numbers/prime/is-prime"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersPrimeIsPrimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    